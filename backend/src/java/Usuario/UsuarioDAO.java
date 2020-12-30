/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Usuario;

import Util.Conexao;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author alex
 */
public class UsuarioDAO {

    public static List<Usuario> lista() {

        try {
            Connection conexao = Conexao.getConexao();
            List<Usuario> listaUsuario = new ArrayList<>();

            PreparedStatement ps = conexao.prepareStatement("SELECT id, nome, documento, email, imagem, data_cadastro FROM usuario");

            ResultSet rs = ps.executeQuery();

            while (rs.next()) {

                Usuario u = new Usuario();

                u.setId(rs.getLong("ID"));
                u.setNome(rs.getString("NOME"));
                u.setDocumento(rs.getString("DOCUMENTO"));
                u.setEmail(rs.getString("EMAIL"));
                u.setImagem(rs.getString("IMAGEM"));
                u.setDataCadastro(rs.getDate("DATA_CADASTRO"));

                listaUsuario.add(u);

            }

            ps.execute();
            ps.close();

            return listaUsuario;
        } catch (SQLException ex) {
            System.out.println("Erro ao listar usuarioDAO " + ex.getMessage());
            return null;
        }
    }

    public Usuario inserir(Usuario usuario) {
        try {
            Connection conexao = Conexao.getConexao();
            PreparedStatement ps;

            ps = conexao.prepareStatement("insert into usuario (nome, email, senha, documento, imagem, data_cadastro, token) values (?, ?, ?, ?, ?, ?, ?");

            ps.setString(1, usuario.getNome());
            ps.setString(2, usuario.getEmail());
            ps.setString(3, usuario.getSenha());
            ps.setString(4, usuario.getDocumento());
            ps.setString(5, usuario.getImagem());
            ps.setDate(6, new java.sql.Date(usuario.getDataCadastro().getTime()));
            ps.setString(7, usuario.getToken());

            ps.execute();
            Conexao.fecharConexao();

            System.out.println("---------------------> Salvo com sucesso.");
        } catch (SQLException ex) {
            System.out.println("Erro ao salvar DAO " + ex.getMessage());
        }
        return usuario;
    }

    public Usuario alterar(Usuario usuario) {

        try {
            Connection conexao = Conexao.getConexao();
            PreparedStatement ps;

            ps = conexao.prepareStatement("update usuario set nome = ?, email = ?, senha = ?, documento = ?, imagem = ?, data_cadastro = ?, token = ? where id = ?");

            ps.setString(1, usuario.getNome());
            ps.setString(2, usuario.getEmail());
            ps.setString(3, usuario.getSenha());
            ps.setString(4, usuario.getDocumento());
            ps.setString(5, usuario.getImagem());
            ps.setDate(6, new java.sql.Date(usuario.getDataCadastro().getTime()));
            ps.setString(7, usuario.getToken());

            ps.setLong(8, usuario.getId());

            ps.execute();
            Conexao.fecharConexao();

            System.out.println("---------------------> Alterado com sucesso.");
        } catch (SQLException ex) {
            System.out.println("Erro ao alterar DAO " + ex.getMessage());
        }
        return usuario;
    }

    public void deletar(long pId) {

        try {
            Connection conexao = Conexao.getConexao();
            PreparedStatement ps;
            ps = conexao.prepareStatement("delete from usuario where id = ?");

            ps.setLong(1, pId);

            ps.execute();
            Conexao.fecharConexao();

            System.out.println("---------------------> Alterado com sucesso.");
        } catch (SQLException ex) {
            System.out.println("Erro ao deletar DAO " + ex.getMessage());
        }
    }

}
